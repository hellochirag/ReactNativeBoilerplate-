import {Article} from '../interface';

export type RootStackParamList = {
  SelectProfileScreen: undefined;
  SettingScreen: undefined;
  ArticleDetail: {item: Article};
  // Add more screen names as needed
};
