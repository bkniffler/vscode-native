import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  StatusBar,
  Text,
  Dimensions,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {WebView} from 'react-native-webview';

declare var global: {HermesInternal: null | {}};

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" translucent />
      <SafeAreaView
        style={{flex: 1, width: '100%', backgroundColor: '#1e1e1e'}}>
        <Text style={{fontSize: 30, color: 'white', marginVertical: 5}}>
          Hi2
        </Text>
        <Web />
      </SafeAreaView>
    </>
  );
};

function Web() {
  const ref = React.useRef<WebView | null>();
  const [size, setSize] = React.useState<{width: number; height: number}>({
    width: 0,
    height: 0,
  });
  React.useEffect(() => {
    if (ref.current) {
      ref.current.reload();
    }
  }, [Dimensions.get('screen'), ref.current]);
  return (
    <View style={{flex: 1}} onLayout={e => setSize(e.nativeEvent.layout)}>
      {size.height && size.width ? (
        <WebView
          key={Dimensions.get('screen') + ''}
          source={{uri: 'http://localhost:9000'}}
          renderError={() => <Text>Error</Text>}
          ref={v => (ref.current = v)}
          startInLoadingState={true}
          scalesPageToFit={true}
          scrollEnabled={false}
          style={size}
        />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
