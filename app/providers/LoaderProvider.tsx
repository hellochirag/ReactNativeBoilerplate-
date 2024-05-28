import React, {createContext, useState, ReactNode} from 'react';
import {View, ActivityIndicator, StyleSheet, Image} from 'react-native';
import {Icons} from '../assets';
interface LoaderContextProps {
  showLoader: () => void;
  hideLoader: () => void;
}

export const LoaderContext = createContext<LoaderContextProps>({
  showLoader: () => {},
  hideLoader: () => {},
});

interface LoaderProviderProps {
  children: ReactNode;
}

const LoaderProvider: React.FC<LoaderProviderProps> = ({children}) => {
  const [isLoading, setIsLoading] = useState(false);

  const showLoader = () => {
    setIsLoading(true);
  };

  const hideLoader = () => {
    setIsLoading(false);
  };

  return (
    <LoaderContext.Provider value={{showLoader, hideLoader}}>
      {children}
      {isLoading && (
        <View style={StyleSheet.absoluteFill}>
          <View style={styles.overlay}>
            <Image
              resizeMode={'cover'}
              source={Icons.iconLoader}
              style={styles.icon}
            />
          </View>
        </View>
      )}
    </LoaderContext.Provider>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  icon: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
});

export default LoaderProvider;
