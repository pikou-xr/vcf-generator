import React, { useCallback } from 'react'
import styled from 'styled-components/macro'
import { useDropzone } from 'react-dropzone'
import { rawDataLoadLocal } from '../store/raw-data'
import { useDispatch } from 'react-redux'

export interface Props {
    className?: string
}

const DragDropFile: React.FunctionComponent<Props> = ({ className = '' }) => {
    const dispatch = useDispatch()
    const onDrop = useCallback(
        ([file]) => {
            dispatch(rawDataLoadLocal(file))
        },
        [dispatch]
    )
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
    })

    // TODO : i18n
    return (
        <div {...getRootProps()} className={className}>
            <input {...getInputProps()} multiple={false} />
            {isDragActive ? (
                <p>Drop le fichier ici ...</p>
            ) : (
                <p>
                    Drag n drop un fichier CSV ici, ou clique pour sélectionner
                </p>
            )}
        </div>
    )
}

export default styled(React.memo(DragDropFile))``
