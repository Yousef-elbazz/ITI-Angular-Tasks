document.addEventListener('DOMContentLoaded', () => {
    const imagePool = document.getElementById('imagePool');
    const dropZone = document.getElementById('dropZone');
    let draggedItem = null; 

    imagePool.querySelectorAll('img').forEach(img => {
        img.addEventListener('dragstart', (e) => {
            draggedItem = img;
            e.dataTransfer.setData('text/plain', img.id); 
            setTimeout(() => {
                img.classList.add('dragging'); 
            }, 0); 
        });

        img.addEventListener('dragend', () => {
            img.classList.remove('dragging'); 
            draggedItem = null;
        });
    });

    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault(); 
        dropZone.classList.add('drag-over'); 
    });

    dropZone.addEventListener('dragleave', () => {
        dropZone.classList.remove('drag-over'); 
    });

    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropZone.classList.remove('drag-over'); 

        if (draggedItem) {
            if (dropZone.textContent.includes('Drop images here!')) {
                dropZone.textContent = '';
            }
            dropZone.appendChild(draggedItem);
        }
    });
});