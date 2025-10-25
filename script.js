// Envelope Animation
document.addEventListener('DOMContentLoaded', function() {
    const envelopeContainer = document.getElementById('envelope-container');
    const envelopeFlap = document.getElementById('envelope-flap');
    const letterContainer = document.getElementById('letter-container');
    const confirmBtn = document.getElementById('confirm-btn');
    const btnText = document.getElementById('btn-text');
    const loadingIcon = document.getElementById('loading-icon');
    const errorModal = document.getElementById('error-modal');
    const closeErrorBtn = document.getElementById('close-error-btn');

    // Start envelope opening animation after 1.5s
    setTimeout(function() {
        envelopeFlap.classList.add('opening');
        
        // Show letter after envelope opens (1s animation)
        setTimeout(function() {
            envelopeContainer.style.display = 'none';
            letterContainer.style.display = 'flex';
        }, 1000);
    }, 1500);

    // Confirm button functionality
    let isLoading = false;

    confirmBtn.addEventListener('click', function() {
        if (!isLoading) {
            isLoading = true;
            confirmBtn.disabled = true;
            
            // Show loading state
            btnText.textContent = 'Processando...';
            loadingIcon.style.display = 'inline-block';
            
            // Simulate processing for 2 seconds
            setTimeout(function() {
                isLoading = false;
                confirmBtn.disabled = false;
                
                // Reset button
                btnText.textContent = 'Cumprir prazo';
                loadingIcon.style.display = 'none';
                
                // Show error modal
                errorModal.style.display = 'block';
            }, 2000);
        }
    });

    // Close error modal
    closeErrorBtn.addEventListener('click', function() {
        errorModal.style.display = 'none';
    });

    // Close modal when clicking backdrop
    errorModal.addEventListener('click', function(e) {
        if (e.target === errorModal || e.target.classList.contains('error-modal-backdrop')) {
            errorModal.style.display = 'none';
        }
    });
});

