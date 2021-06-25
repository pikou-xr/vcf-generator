import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/macro'
import { selectVcfContactsAndErrors } from '../store/selectors'
import { forceDownload } from '../utils/browser'
import { contactsToVcard } from '../utils/vcf'

const FILENAME = 'contacts.vcf'

export interface Props {
    className?: string
}

const DownloadVcfFile: React.FunctionComponent<Props> = ({ 
    className = ''
}) => {
    const {vcfContacts} = useSelector(selectVcfContactsAndErrors)
    const onDownloadClicked = () => {
        const vCardStr = contactsToVcard(vcfContacts)
        forceDownload(FILENAME, vCardStr, 'text/vcard')
    }
    return (
        <div className={className}>
            {/* TODO : i18n */}
            <button onClick={onDownloadClicked}>Télécharger "{FILENAME}"</button>
        </div>
    )
}

export default styled(React.memo(DownloadVcfFile))``