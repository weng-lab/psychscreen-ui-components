import downloadjs from 'downloadjs';
import domtoimage from 'dom-to-image';

export function handleDownload(
    target: HTMLElement | null,
    filename: string = 'scatterPlot.png'
) {
    if (!target) return;

    domtoimage
        .toPng(target)
        .then((dataUrl) => {
            downloadjs(dataUrl, filename, 'image/png');
        })
        .catch((error) => {
            console.error('Download failed:', error);
        });
}