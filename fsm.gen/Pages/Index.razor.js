export function GenerateQRCode(div, content) {
    new QRCode(div, {
        text: content,
        width: 1024,
        height: 1024,
        correctLevel: QRCode.CorrectLevel.L
    });
}