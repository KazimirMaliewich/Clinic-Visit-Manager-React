import React from 'react'
import { createPortal } from 'react-dom'
import { Button } from '../Button/Button'

export const Modal = ({ title, text, onClose, children, isShown }) => {
    if (!isShown) return null

    const modal = (
        <div
            className="z-[9999] flex items-center justify-center bg-black bg-opacity-50"
            style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 9999 }}
        >
            <div className="z-[10000] bg-red-200 w-[95%] max-w-[640px] p-6 rounded-md relative text-black border border-gray-200" style={{boxShadow: '0 8px 24px rgba(0,0,0,0.2)'}}>
                                <Button text='X' onClick={onClose} className="absolute top-3 right-3" />
                                <h3 className="mt-2 text-lg font-semibold">{title}</h3>
                                <p className="mt-2 mb-4">{text}</p>
                                <div className="flex gap-2">
                                    {children}
                                </div>
                        </div>
        </div>
    )

    return createPortal(modal, document.body)
}
