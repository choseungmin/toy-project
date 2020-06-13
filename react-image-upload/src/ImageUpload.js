import React from 'react';
import ImageUploader from 'react-images-upload';
import $ from 'jquery';


class ImageUpload extends React.Component {

  constructor() {
    super();
  }

  state= {
    files: [],
    base64: [],
  }

  onclickImageUpload() {
    // window.getElementByClassName('chooseFileButton').click();
    $('.fileUploader .chooseFileButton').click();
  }

  changeImage =(pictureFiles, pictureBase64) => {
    // picutreFiles에 boundery 정보가 return 되고,
    // pictureBase64 에 base64 정보가 return 된다. 기본 array로 return

    // Image Info
    // console.log('pictureFiles', pictureFiles);
    // Image Data
    console.log('pictureBase64', pictureBase64);

    this.setState({
      files: [...pictureFiles],
      base64: [...pictureBase64]
    });
  }

  onclickDeleteImage =(index) => {
    // console.log('deleteImage', index, $('.deleteImage'));
    $('.deleteImage')[index].click();

  }

  render() {

    const { files, base64 } = this.state;

    console.log('this.state', this.state.base64[0])

    return(
      <div>
        <button onClick={() => this.onclickImageUpload()}>image upload</button>
        <div hidden={ true }>
          <ImageUploader
            withIcon={ true }
            imgExtension={ ['.jpg', '.jpeg', '.gif', '.png', '.gif',
              '.JPG', '.JPEG', '.GIF', '.PNG', '.GIF'] }
            maxFileSize={ 524280 }
            fileSizeError={ '파일 사이즈가 너무 큽니다.' }
            withPreview={ true }
            buttonText={ 'choice image' }
            onChange={ this.changeImage }
            // singleImage
          />
        </div>
        <div>
          <h3>gallerly</h3>
          { base64.length > 0 &&
          base64.map((file,index) =>
            <div key={ index }>
              <img src={ file }/>
              <button onClick={ () => this.onclickDeleteImage(index) }>X</button>
            </div>
          )
          }
        </div>

        <div>
          <h3>sample image</h3>
          <img src={this.state.base64[0]}/>
        </div>
      </div>
    )
  }
}

export default ImageUpload;