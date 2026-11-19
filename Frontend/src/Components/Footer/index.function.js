export default function useFooter() {
    const currentYear = new Date().getFullYear();

    return {
        currentYear,
    };
}
