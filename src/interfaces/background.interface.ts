export const enum BackgroundType {
    facebook = 'facebook',
    instagram = 'instagram',
    linkedin = 'linkedin',
    a3 = 'a3',
    a4 = 'a4',
    a5 = 'a5',
}

export const enum BackgroundAlgorithm {
    algorithmTemplate1 = 'algorithmTemplate1',
    algorithmTemplate2 = 'algorithmTemplate2',
    algorithmTemplate3 = 'algorithmTemplate3',
    algorithmTemplate4 = 'algorithmTemplate4',
    algorithmTemplate5 = 'algorithmTemplate5',
}

export default interface BackgroundInterface {
    background_id: number;
    background_user_id: number;
    background_user_category_id: number;
    background_name: string;
    background_type: BackgroundType;
    background_algorithm: BackgroundAlgorithm;
    background_colors: string[];
    background_font: number;
    background_element1: number;
    background_element2: number;
    background_element3: number;
    background_element4: number;
    background_element5: number;
    background_random_seed: string;
}