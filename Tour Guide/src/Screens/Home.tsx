import {
    View,
    Text,
    ScrollView,
    Image,
    StyleSheet,
    SafeAreaView
} from 'react-native'
import React from 'react'
import {useEffect} from 'react'

// Custom imports 
import { logo } from '../assets'
import { Separator } from '../components/Contact'
import FlatCards from '../components/FlatCards'
import ScrollableCards from '../components/ScrollableCards'
import TrendingPlaces from '../components/TrendingPlaces'
import BlogCards from '../components/BlogCards'
import Contact from '../components/Contact'

const Home = ({navigation}:any) => {
    useEffect(() => {
        navigation.setOptions({headerShown : false}); 
    }, [])
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                {/* Components */}
                <View style={styles.header}>
                    <Image
                        source={logo}
                        style={styles.logo}
                    />
                    <View>
                        <Text style={{ fontSize: 21, fontWeight: 'bold' }}>Tour Guide</Text>
                        <Text>Find the best place to Travel.</Text>
                    </View>
                </View>
                <Separator />
                <FlatCards />
                <ScrollableCards />
                <TrendingPlaces />
                <BlogCards navigation= {navigation}/>
                <Contact />
                {/* End of components */}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    logo: {
        width: 80,
        height: 80
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    separator: {
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});

export default Home