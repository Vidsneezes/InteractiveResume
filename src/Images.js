import defaultImage from './images/default.png';
import project_1Image from './images/64x64icon_2.png';
import project_2Image from './images/64x64icon_3.png';

function loadImages(){
    var images = {
        "default":defaultImage,
        "project1":project_1Image,
        "project2":project_2Image
    };
    return images;
}

export default loadImages;