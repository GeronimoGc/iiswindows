document
    .getElementById('openFolderButton')
    .addEventListener('click', function () {
        // Reemplaza 'C:\\' con la ruta de la carpeta que deseas abrir.
        // Ten en cuenta que esto funcionará solo en algunos navegadores y sistemas operativos.
        window.location.href = 'file:///C:/'
    })
