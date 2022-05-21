import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import ReactNativeZoomableView from '@openspacelabs/react-native-zoomable-view/src/ReactNativeZoomableView';

const gridCount = 2500;
const gridSize = 50;

export default function App() {
	return (
		<View style={styles.container}>
			<View style={styles.mapContainer}>
				<ReactNativeZoomableView
					maxZoom={3}
					minZoom={0.1}
					zoomStep={0.5}
					initialZoom={0.1}
					bindToBorders={false}
					movementSensibility={5}
					style={{
						backgroundColor: 'red',
					}}
				>
					<View style={styles.map}>
						{[...Array(gridCount)].map((x, i) =>
							<View key={i} style={styles.grid}>
								<Text>{i}</Text>
							</View>
						)}
					</View>
				</ReactNativeZoomableView>
			</View>
			<StatusBar style="auto"/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
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
		backgroundColor: 'green',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		overflow: 'hidden'
	},
	grid: {
		width: 50,
		height: 50,
		backgroundColor: '#cccccc',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
