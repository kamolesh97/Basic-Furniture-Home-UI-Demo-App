/* Libraries */
import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, FlatList, SafeAreaView, Platform, ScrollView, Dimensions} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

// ICON IMPORT
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

// THEME IMPORT
import * as theme from '../../Constants/theme';

// HELPER IMPORT
import Helper from '../../Constants/helper';

// CONSTANTS
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCategory: 0,
            categories: ['Chairs', 'Tables', 'Sofa', 'Wardrobes'],
            products: [
                {
                    id: 1,
                    name: 'Furniture 1',
                    desc:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    price: '$600',
                    picture: require('../../../assets/images/furniture1.png'),
                },
                {
                    id: 2,
                    name: 'Furniture 2',
                    desc:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    price: '$600',
                    picture: require('../../../assets/images/furniture2.png'),
                },
                {
                    id: 3,
                    name: 'Furniture 3',
                    desc:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    price: '$600',
                    picture: require('../../../assets/images/furniture3.png'),
                },
                {
                    id: 4,
                    name: 'Furniture 4',
                    desc:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    price: '$600',
                    picture: require('../../../assets/images/furniture4.png'),
                },
                {
                    id: 5,
                    name: 'Furniture 5',
                    desc:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    price: '$600',
                    picture: require('../../../assets/images/furniture5.png'),
                },
                {
                    id: 6,
                    name: 'Furniture 6',
                    desc:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    price: '$600',
                    picture: require('../../../assets/images/furniture6.png'),
                },
                {
                    id: 7,
                    name: 'Furniture 7',
                    desc:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    price: '$600',
                    picture: require('../../../assets/images/furniture7.png'),
                },
                {
                    id: 8,
                    name: 'Furniture 8',
                    desc:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    price: '$600',
                    picture: require('../../../assets/images/furniture8.png'),
                },
            ],
        };
    }

    static navigationOptions = {
        headerShown: false,
    };

    // LIFECYCLE METHODS
    componentDidMount = () => {};
    // END LIFECYCLE METHODS

    // UTILITY FUNCTIONS
    renderItem = ({item, index}) => {
        return (
            <View
                style={{
                    ...styles.shadow,
                    width: WIDTH / 2.35,
                    marginBottom: 2 * theme.appDims.boundary,
                    height: EStyleSheet.value('240rem'),
                    padding: theme.appDims.boundary / 2,
                }}>
                <Image source={item.picture} style={{height: EStyleSheet.value('100rem'), aspectRatio: 1, resizeMode: 'contain', alignSelf: 'center'}} />
                <View style={{flex: 1, marginTop: EStyleSheet.value('10rem'), justifyContent: 'space-between'}}>
                    <Text
                        style={{
                            fontSize: EStyleSheet.value('18rem'),
                            fontWeight: 'bold',
                        }}>
                        {item.name}
                    </Text>
                    <Text
                        numberOfLines={2}
                        style={{
                            fontSize: EStyleSheet.value('10rem'),
                            opacity: 0.4,
                        }}>
                        {item.desc}
                    </Text>
                    <Text
                        style={{
                            fontSize: EStyleSheet.value('20rem'),
                            fontWeight: '600',
                        }}>
                        {item.price}
                    </Text>
                </View>
                {/* ADD TO CART BUTTON */}
                <TouchableOpacity
                    style={{
                        height: EStyleSheet.value('40rem'),
                        aspectRatio: 1,
                        backgroundColor: theme.colors.themeCol,
                        position: 'absolute',
                        bottom: EStyleSheet.value('-10rem'),
                        right: 0,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <FontAwesome5 name={'shopping-bag'} color={'white'} size={EStyleSheet.value('20rem')} />
                </TouchableOpacity>
            </View>
        );
    };
    // END UTILITY FUNCTIONS

    // FUNCTIONAL COMPONENTS
    // END FUNCTIONAL COMPONENTS

    // RENDERING FUNCTIONS
    render() {
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: theme.colors.bgCol}}>
                {/* HEADER */}
                <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between', padding: theme.appDims.boundary, alignItems: 'center'}}>
                    <Ionicons name={'arrow-back'} color={'black'} size={EStyleSheet.value('30rem')} />
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <FontAwesome5 name={'shopping-bag'} color={'black'} size={EStyleSheet.value('25rem')} />
                        <Ionicons name={'md-menu-outline'} color={'black'} size={EStyleSheet.value('30rem')} style={{marginLeft: EStyleSheet.value('20rem')}} />
                    </View>
                </View>

                <View style={{flex: 1}}>
                    {/* CATEGORIES */}
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={{maxHeight: EStyleSheet.value('60rem')}}
                        contentContainerStyle={{paddingLeft: theme.appDims.boundary}}>
                        {this.state.categories.map((item, index) => {
                            return (
                                <TouchableOpacity onPress={() => this.setState({selectedCategory: index})}>
                                    <Text
                                        style={{
                                            fontSize: EStyleSheet.value('26rem'),
                                            fontWeight: 'bold',
                                            marginRight: EStyleSheet.value('30rem'),
                                            opacity: index == this.state.selectedCategory ? 1 : 0.2,
                                        }}>
                                        {item}
                                    </Text>
                                </TouchableOpacity>
                            );
                        })}
                    </ScrollView>

                    {/* INFO AND FILTER */}
                    <View
                        style={{
                            width: '100%',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            padding: theme.appDims.boundary,
                            alignItems: 'center',
                        }}>
                        <Text style={{fontSize: EStyleSheet.value('12rem')}}>{this.state.products.length} Products</Text>
                        <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={{fontSize: EStyleSheet.value('14rem'), fontWeight: '700'}}>Popular</Text>
                            <Ionicons name={'chevron-down'} color={'black'} size={EStyleSheet.value('20rem')} style={{marginLeft: EStyleSheet.value('8rem')}} />
                        </TouchableOpacity>
                    </View>

                    {/* PRODUCT ITEM CARDS */}
                    <FlatList
                        columnWrapperStyle={{justifyContent: 'space-between', paddingHorizontal: theme.appDims.boundary}}
                        contentContainerStyle={{paddingTop: EStyleSheet.value('10rem')}}
                        data={this.state.products}
                        renderItem={this.renderItem}
                        keyExtractor={(item) => item.id.toString()}
                        numColumns={2}
                    />
                </View>
            </SafeAreaView>
        );
    }
    // END RENDERING FUNCTIONS
}

const styles = EStyleSheet.create({
    shadow: {
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,

        elevation: 5,
    },
});

export default Home;
