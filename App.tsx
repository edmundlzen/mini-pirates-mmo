import {StatusBar} from 'expo-status-bar';
import {Image, StyleSheet, Text, View} from 'react-native';
import ReactNativeZoomableView from '@openspacelabs/react-native-zoomable-view/src/ReactNativeZoomableView';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

const gridCount = 2500;
const gridSize = 50;

export function Map() {
	return (
		<View style={styles.container}>
			{/*<View style={styles.mapContainer}>*/}
			{/*<ImageBackground source={require('./assets/images/water.png')} style={{width: "100%", height: "100%"}}*/}
			{/*				 imageStyle={{resizeMode: 'repeat'}}>*/}
			<ReactNativeZoomableView
				maxZoom={3}
				minZoom={0.1}
				zoomStep={0.5}
				initialZoom={0.1}
				bindToBorders={false}
			>
				<View style={styles.map}>
					{[...Array(gridCount)].map((x, i) =>
						<View key={i} style={styles.grid}>
							<Image
								style={styles.gridImage}
								source={require('./assets/images/water.png')}
							/>
							{/*<Text>{i}</Text>*/}
						</View>
					)}
				</View>
			</ReactNativeZoomableView>
			{/*</ImageBackground>*/}
			{/*</View>*/}
			<StatusBar style="auto"/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#edffff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	mapContainer: {
		width: '80%',
		height: '80%',
		borderWidth: 1,
		borderColor: 'black',
	},
	map: {
		width: Math.ceil(Math.sqrt(gridCount)) * gridSize,
		height: Math.ceil(Math.sqrt(gridCount)) * gridSize,
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		overflow: 'hidden'
	},
	grid: {
		width: 50,
		height: 50,
		backgroundColor: 'transparent',
		alignItems: 'center',
		justifyContent: 'center',
	},
	gridImage: {
		width: '100%',
		height: '100%',
	},
});

const Tab = createBottomTabNavigator();

export function HomeScreen() {
	return (
		<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
			<Text>Home!</Text>
		</View>
	);
}

export default function App() {
	return (
		<NavigationContainer>
			<Tab.Navigator>
				<Tab.Screen name="Map" component={Map}/>
				<Tab.Screen name="Home" component={HomeScreen}/>
			</Tab.Navigator>
		</NavigationContainer>
	);
}
