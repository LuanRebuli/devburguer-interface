export function formatDate(date) {
    return new Date(date).toLocaleDateString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        month: 'short',
        day: '2-digit',
    })
}