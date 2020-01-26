export interface DishModel {
    _id: string;
    name: string;
    description: string;
    vegType: 'VEG' | 'NON_VEG';
    time: number;
    timeUnit: 'MIN' | 'HOUR';
    difficulty: 'EASY' | 'MODERATE' | 'HARD' | 'EXPERT';
    ingredientsList: { name: string, quantity: string }[];
    steps: string[];
    imageUrl: string;
    categories: string[]
}