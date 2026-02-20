
        
export interface FilterOptionModel {
  id: string;
  label: string;
  iconName: string;
}

export interface FilterGroupModel {
  id: string;
  title: string;
  options: FilterOptionModel[];
}

export const REGION_FILTERS: FilterGroupModel = {
  id: 'region',
  title: '地理区域',
  options: [
    { id: 'east', label: '华东', iconName: 'Compass' },
    { id: 'south', label: '华南', iconName: 'Compass' },
    { id: 'north', label: '华北', iconName: 'Compass' },
    { id: 'southwest', label: '西南', iconName: 'Compass' },
    { id: 'northwest', label: '西北', iconName: 'Compass' },
  ]
};

export const CLIMATE_FILTERS: FilterGroupModel = {
  id: 'climate',
  title: '气候偏好',
  options: [
    { id: 'warm', label: '温暖宜人', iconName: 'Sun' },
    { id: 'cool', label: '清爽避暑', iconName: 'CloudRain' },
    { id: 'snow', label: '林海雪原', iconName: 'Snowflake' },
    { id: 'tropical', label: '热带风情', iconName: 'Palmtree' },
  ]
};

export const BUDGET_FILTERS: FilterGroupModel = {
  id: 'budget',
  title: '预算范围',
  options: [
    { id: 'economy', label: '经济实惠', iconName: 'Wallet' },
    { id: 'standard', label: '舒适品质', iconName: 'Banknote' },
    { id: 'luxury', label: '奢华体验', iconName: 'Coins' },
  ]
};
        
      