import { useState, useEffect } from 'react';

export default function EasterEgg() {
    const [showModal, setShowModal] = useState(false);
    const secretCode = '11235813';
    const typedCode = useSecretCode(secretCode);

    useEffect(() => {
        if (typedCode === secretCode) {
            setShowModal(true);
        }
    }, [typedCode]);

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <>
            {showModal && <EasterEggModal onClose={closeModal} />}
        </>
    );
}

function EasterEggModal({ onClose }) {
    return (
        <div id="modal" style={{ display: 'block'}}>
            <h2>Grattis, du hittade påskägget!</h2>
            <p>Tel: 0705516182 🎉</p>
            <button onClick={onClose}>Stäng</button>
        </div>
    );
}


function useSecretCode(secretCode) {
    const [typedCode, setTypedCode] = useState('');

    useEffect(() => {
        const handleKeydown = (event) => {

            if (event.key >= '0' && event.key <= '9') {

                setTypedCode((prevCode) => {
                    const newCode = prevCode + event.key;

                    if (newCode.length > secretCode.length) {
                        return newCode.slice(1);
                    }
                    return newCode;
                });
            }
        }

        window.addEventListener('keydown', handleKeydown);
        return () => window.removeEventListener('keydown', handleKeydown);
    }, []); 

    return typedCode;
}