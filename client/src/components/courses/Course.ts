import image from '../../ExportImages';

type ImageSources = {
    contentWriting: string;
    design: string;
    finance: string;
    marketing: string;
    comunication: string;
    network: string;
    photography: string;
    videography: string;
    science: string;
};

const courseImage: ImageSources = {
    contentWriting: image.contentWriting,
    design: image.design,
    finance: image.finance,
    marketing: image.marketing,
    comunication: image.comunication,
    network: image.network,
    photography: image.photography,
    videography: image.videography,
    science: image.science
};

export type CourseSources = {
    img: string;
    name: string;
    price: string;
    newPrice?: string;
};

export const courseArr: CourseSources[] = [
    {
        img: courseImage.contentWriting,
        name: 'Content Writing Course',
        price: '25000 ֏'
    },
    {
        img: courseImage.design,
        name: 'Art and Design Course',
        price: '30000 ֏',
        newPrice: '23000 ֏'
    },
    {
        img: courseImage.finance,
        name: 'Finance Course',
        price: '25000 ֏',
        newPrice: '18000 ֏'
    },
    {
        img: courseImage.marketing,
        name: 'Markenting Course',
        price: '30000 ֏',
        newPrice: '23000 ֏'
    },
    {
        img: courseImage.comunication,
        name: 'Comunication Course',
        price: '25000 ֏'
    },
    {
        img: courseImage.network,
        name: 'Network Course',
        price: '22000 ֏',
        newPrice: '15000 ֏'
    },
    {
        img: courseImage.photography,
        name: 'Photography Course',
        price: '25000 ֏'
    },
    {
        img: courseImage.videography,
        name: 'Videography Course',
        price: '25000 ֏'
    },
    {
        img: courseImage.science,
        name: 'Science Course',
        price: '29000 ֏',
        newPrice: '20000 ֏'
    }
];
