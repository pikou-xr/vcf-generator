import Papa from 'papaparse'
import { RawDatum, RawData } from '../types'

export class ParseError extends Error {}

// TODO : i18n
const normalizePapaParseError = (error: Papa.ParseError, data: RawData): ParseError => {
    let message = ''
    if (data[error.row]) {
        message = `line ${error.row} (${error.message}) : ${Object.values(data[error.row]).join(', ')}`
    } else {
        message = `line ${error.row} ${error.message}`
    }
    return new ParseError(message)
}

export interface ParseResult {
    data: RawData
    errors: Array<ParseError>
}

export const parseCsv = async (file: File): Promise<ParseResult> => {
    return new Promise((resolve) => {
        Papa.parse<RawDatum>(file, {
            header: true,
            skipEmptyLines: true,
            complete: (results) => {
                let data: RawData = results.data
                let errors: ParseResult["errors"] = []
                if (results.errors.length) {
                    // Remove errored rows
                    const erroredRows = results.errors.map((error) => error.row)
                    data = data.filter((d, i) => !erroredRows.includes(i))
                    errors = results.errors.map((error) =>
                        normalizePapaParseError(error, results.data)
                    )
                }
                resolve({ data, errors })
            },
        })
    })
}
