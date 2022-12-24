/**
 * get timer progress data
 * @param currentCounter
 * @param originalCounter
 * @returns {number}
 */
function getProgress(currentCounter, originalCounter) {
    return 1 - (currentCounter - originalCounter)
}
