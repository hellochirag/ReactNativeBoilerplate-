import {useEffect} from 'react';
import {BackHandler} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function useScreenRedirection(screenName?: string) {
  const navigation = useNavigation();
  useEffect(() => {
    const backAction = () => {
      if (screenName) {
        navigation?.navigate(screenName);
      } else {
        navigation?.goBack();
      }
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler?.remove();
  }, [screenName]);
}
export default useScreenRedirection;
