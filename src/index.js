

  //
  // const exif = require('jpeg-exif');
  // let file = '~/dist/assets/london-10-9-2018.jpg';
  // exif.parse(file, (err, data) => {
  //     if (err) {
  //         console.log(err);
  //     } else {
  //         console.log("nak");
  //     }
  // });

  // var ExifImage = require('exif').ExifImage;
  //
  // try {
  //     new ExifImage({ image : 'assets/london-10-9-2018.jpg' }, function (error, exifData) {
  //         if (error)
  //             console.log('Error: '+error.message);
  //         else
  //             console.log(exifData); // Do something with your data!
  //     });
  // } catch (error) {
  //     console.log('Error: ' + error.message);
  // }

  //image optimization

const imagemin = require('imagemin');
const imageminPngquant = require('imagemin-pngquant');

imagemin(['docs/assets/original/*.jpg'], 'docs/assets/opt', {use: [imageminPngquant()]}).then(() => {
    console.log('Images optimized');
});
