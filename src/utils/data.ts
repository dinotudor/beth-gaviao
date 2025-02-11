export enum CategoriesEnum {
    BlackAndWhite = "P&B",
    UrbanScenes = "Cenas Urbanas",
    Nature = "Natureza",
    Architecture = "Arquitetura",
}

export type ImageDataType = {
    src: string;
    title: string;
    category: CategoriesEnum;
    date?: string;
};

export const ImageMetaData: ImageDataType[] = [
    {
        src: "/gallery/img1.jpg",
        title: "Title 01",
        category: CategoriesEnum.Architecture,
        date: "Fev. 2025",
    },
    {
        src: "/gallery/img2.jpg",
        title: "Title 02",
        category: CategoriesEnum.BlackAndWhite,
        date: "Dez. 2021",
    },
    {
        src: "/gallery/img3.jpg",
        title: "Title 03",
        category: CategoriesEnum.Nature,
        date: "Jan. 2016",
    },
    {
        src: "/gallery/img4.jpg",
        title: "Title 04",
        category: CategoriesEnum.UrbanScenes,
        date: "Fev. 2024",
    },
    {
        src: "/gallery/img5.jpg",
        title: "Title 05",
        category: CategoriesEnum.Architecture,
        date: "Ago. 2010",
    },
    {
        src: "/gallery/img6.jpg",
        title: "Title 06",
        category: CategoriesEnum.BlackAndWhite,
        date: "Jun. 2013",
    },
    {
        src: "/gallery/img7.jpg",
        title: "Title 07",
        category: CategoriesEnum.Nature,
        date: "Jul. 2024",
    },
    {
        src: "/gallery/img8.jpg",
        title: "Title 08",
        category: CategoriesEnum.UrbanScenes,
        date: "Fev. 2001",
    },
    {
        src: "/gallery/img9.jpg",
        title: "Title 09",
        category: CategoriesEnum.Architecture,
        date: "Set. 2001",
    },
    {
        src: "/gallery/img10.jpg",
        title: "Title 10",
        category: CategoriesEnum.BlackAndWhite,
        date: "Out. 2012",
    },
    {
        src: "/gallery/img11.jpg",
        title: "Title 11",
        category: CategoriesEnum.Nature,
        date: "Mar. 2018",
    },
    {
        src: "/gallery/img12.jpg",
        title: "Title 12",
        category: CategoriesEnum.UrbanScenes,
        date: "Nov. 2021",
    },
    {
        src: "/gallery/img13.jpg",
        title: "Title 13",
        category: CategoriesEnum.Architecture,
        date: "Mar. 2014",
    },
    {
        src: "/gallery/img14.jpg",
        title: "Title 14",
        category: CategoriesEnum.BlackAndWhite,
        date: "Jan. 2025",
    },
    {
        src: "/gallery/img15.jpg",
        title: "Title 15",
        category: CategoriesEnum.Nature,
        date: "Fev. 2012",
    },
    {
        src: "/gallery/img16.jpg",
        title: "Title 16",
        category: CategoriesEnum.UrbanScenes,
        date: "Ago. 2022",
    },
    {
        src: "/gallery/img17.jpg",
        title: "Title 17",
        category: CategoriesEnum.Architecture,
        date: "Fev. 2025",
    },
    {
        src: "/gallery/img18.jpg",
        title: "Title 18",
        category: CategoriesEnum.BlackAndWhite,
        date: "Set. 2021",
    },
    {
        src: "/gallery/img19.jpg",
        title: "Title 19",
        category: CategoriesEnum.Nature,
        date: "Mai. 2010",
    },
    {
        src: "/gallery/img20.jpg",
        title: "Title 20",
        category: CategoriesEnum.UrbanScenes,
        date: "Fev. 2025",
    },
    {
        src: "/gallery/img21.jpg",
        title: "Title 21",
        category: CategoriesEnum.Architecture,
        date: "Jan. 2010",
    },
    {
        src: "/gallery/img22.jpg",
        title: "Title 22",
        category: CategoriesEnum.BlackAndWhite,
        date: "Dez. 1999",
    },
    {
        src: "/gallery/img23.jpg",
        title: "Title 23",
        category: CategoriesEnum.Nature,
        date: "Fev. 2025",
    },
    {
        src: "/gallery/img24.jpg",
        title: "Title 24",
        category: CategoriesEnum.UrbanScenes,
        date: "Jan. 2025",
    },
];
