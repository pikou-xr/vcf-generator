import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/macro'
import { selectVcfContactsAndErrors } from '../store/selectors'
import { forceDownload } from '../utils/browser'
import { NO_GROUPING_KEY } from '../utils/group-by-field'
import { contactsToVcard } from '../utils/vcf'

// TODO : i18n
const NO_GROUPING_FILENAME = 'contacts.vcf'
const NO_GROUP_NAME_BASENAME = 'GROUPE-SANS-NOM'

export interface Props {
    className?: string
}

const DownloadVcfFile: React.FunctionComponent<Props> = ({
    className = '',
}) => {
    const vcfContactsAndErrors = useSelector(selectVcfContactsAndErrors)

    const downloadButtons = Object.entries(vcfContactsAndErrors).map(
        ([group, { vcfContacts, errors }]) => {
            const filename =
                group === NO_GROUPING_KEY
                    ? NO_GROUPING_FILENAME
                    : `${group.length ? group : NO_GROUP_NAME_BASENAME}.vcf`
            const onDownloadClicked = () => {
                const vCardStr = contactsToVcard(vcfContacts)
                forceDownload(filename, vCardStr, 'text/vcard')
            }
            return (
                <div className={className}>
                    {/* TODO : i18n */}
                    <button onClick={onDownloadClicked}>
                        Télécharger "{filename}"
                    </button>
                </div>
            )
        }
    )

    return <Container>{downloadButtons}</Container>
}

const Container = styled.div``

export default styled(React.memo(DownloadVcfFile))``
