// Canvas要素の作成
const canvas = document.getElementById('canvas');

// 描画するための2Dコンテキスト
const ctx = canvas.getContext('2d');

// 画像ファイルの読み込み
const img = new Image();
img.src = 'images/HPbar.png';
img.onload = () => {
    canvas.width = img.width;
    canvas.height = img.height;

    // Canvasに画像を描画する
    ctx.drawImage(img, 0, 0);
};

img.onload = () => {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);

    // 画像情報の取得（offsetX, offsetY, 幅、高さ）
    const imageData = ctx.getImageData(0, 0, canvas.clientWidth, canvas.clientHeight);

    // imageData.dataが1pxごとのRGBAが含まれる
    let data = imageData.data;

    // ここでimageData.dataに対して画像処理を行う

    // 画像情報からCanvasに書き戻す
    ctx.putImageData(imageData, 0, 0);
};