export interface Ad {
    imageUrl: string
    title: string
    body: string
    url: string
}

const ALL_ADS: Ad[] = [
    {
        imageUrl: 'http://via.placeholder.com/350x150',
        title: 'Title 1',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        url: 'http://google.com'
    },
    {
        imageUrl: 'http://via.placeholder.com/350x150',
        title: 'Title 2',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        url: 'http://google.com'
    },
]

export class Ads{

    private static instance: Ads;
    private ads: Ad[]

    private constructor() {
        this.initAds()
    }

    static getInstance() {
        if (!Ads.instance) {
            Ads.instance = new Ads()
        }
        return Ads.instance
    }

    private initAds() {
        this.ads = [...ALL_ADS]
    }
    getAd() {
        if (this.ads.length === 0) {
            this.initAds()
        }
        return this.ads.pop()
    }
}

export default Ads