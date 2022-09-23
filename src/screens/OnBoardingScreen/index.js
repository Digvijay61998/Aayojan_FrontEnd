import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {Component} from 'react';
// import * as IMAGECONST from '../../theme/ImageConstants';
// import AppIntroSlider from 'react-native-app-intro-slider';
import Onboarding from 'react-native-onboarding-swiper';
import { IMAGE} from '../../common/constants';
import { scale, verticalScale, moderateScale} from 'react-native-size-matters';

export class OnBoardingScreen extends Component {
    constructor(props) {
      console.log("props",props);
    super(props);
    this.state = {
      showRealApp: false,
      userRole: false,
      boardinData: [
        {
          // backgroundColor: '#59b2ab',
          image: <Image style={styles.sliderImage} source={IMAGE.onBoard1} />,
          title: (
            <Text style={styles.slidesTextUp}>
              Manage your Guests
            </Text>
          ),
          subtitle: (
            <Text style={styles.slidesText}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been</Text>
          ),
          style: styles.headerConatiner,
        },
        {
          // backgroundColor: '#59b2ab',
          image: <Image style={styles.sliderImage} source={IMAGE.onBoard4} />,
          title: (
            <Text style={styles.slidesTextUp}>Organize your calling Methods</Text>
          ),
          subtitle: (
            <Text style={styles.slidesText}> Lorem Ipsum is simply dummy text of the printing and typesetting</Text>
          ),
          style: styles.headerConatiner,
        },
        {
          // backgroundColor: '#59b2ab',
          image: <Image style={styles.sliderImage} source={IMAGE.onBoard3} />,
          title: (
            <Text style={styles.slidesTextUp}>
              Mange their Travel Plans
            </Text>
          ),
          subtitle: <Text style={styles.slidesText}> Lorem Ipsum is simply dummy text of the printing and typesetting</Text>,
          style: styles.headerConatiner,
        },
      ],
    };
  }

  sendData() {
    this.setState({userRole: props.route.params.userRole});
    console.log('@@@ Props On Data======', this.state.userRole);
  }

  componentDidMount = async () => {
    this.sendData();
  };

  renderSliderImg = ({item}) => {
    return (
      <View style={{flex: 1}}>
        <View style={styles.headerConatiner}>
          <Image style={styles.sliderImage} source={item.image} />
          <View style={styles.textCont}>
            <Text style={styles.slidesText}>{item.title}</Text>
            <Text style={styles.slidesText}>{item.text}</Text>
          </View>
        </View>
      </View>
    );
  };

  renderNextButton = ({...props}) => {
    return (
      <TouchableOpacity {...props} style={styles.nextButtonContainer}>
        <Text style={styles.buttonText}>Next</Text>
        {/* <Image style={styles.nextArrow} source={IMAGECONST.NEXTARROW} /> */}
      </TouchableOpacity>
    );
  };

  // Skip = ({ ...props }) => (
  //     <TouchableOpacity
  //         style={{ marginHorizontal: scale(25), }}
  //         {...props}
  //     >
  //         <Text style={styles.skipButton}>Skip</Text>
  //     </TouchableOpacity>
  // );

  Done = ({...props}) => (
    <TouchableOpacity style={styles.nextButtonContainer} {...props}>
      <Text style={styles.skipButton}>Done</Text>
    </TouchableOpacity>
  );

  Dots = ({selected}) => {
    let backgroundColor;
    backgroundColor = selected ? '#6df0df' : '#fff';
    return (
      <View
        style={{
          width: scale(12),
          height: scale(12),
          marginHorizontal: 3,
          borderRadius: 10,
          borderColor: '#A44296',
          borderWidth: 0.6,
          marginBottom: verticalScale(140),
          backgroundColor,
        }}
      />
    );
  };

  render() {
    console.log('@@@ Dttattata', this.state.userRole);
    let data = 'sdsd';
    return (
      <View style={styles.container}>
        <Onboarding
          boardinData={this.renderSliderImg}
          // SkipButtonComponent={this.Skip}
          NextButtonComponent={this.renderNextButton}
          bottomBarColor={'#fff'}
          bottomBarHeight={100}
          DoneButtonComponent={this.Done}
          DotComponent={this.Dots}
        //   onSkip={() =>
        //     this.setState({userRole: true}, () => {
        //       this.props.navigation.replace('AuthStackScreen', {
        //         userRole: data,
        //       });
        //     })
        //   }
          onDone={() =>
            this.props.navigation.navigate('AuthStackScreen', { screen: 'HandleAuth' })
          }
          pages={this.state.boardinData}
        />
      </View>
    );
  }
}

export default OnBoardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  headerConatiner: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },

  sliderImage: {
      height: verticalScale(300),
    aspectRatio: 1.2,
    resizeMode: 'contain',
  },

  textCont: {
    // marginTop: verticalScale(150),
    justifyContent: 'center',
    alignItems: 'center',
  },

  slidesTextUp: {
    fontSize: scale(24),
    fontFamily: 'Poppins-Medium',
    fontWeight: '600',
      color: '#333333',
      marginTop: verticalScale(-50),
      paddingLeft: scale(24),
      paddingRight:scale(24),
  },

  slidesText: {
    fontSize: scale(15),
    // fontFamily: 'Metropolis',
      marginTop:scale(10),
    fontWeight: '600',
      color: '#737373',
      textAlign: "center",
      paddingLeft: scale(30),
      paddingRight:scale(30),
    marginBottom: verticalScale(150),
  },

  nextButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: scale(250),
    height: scale(50),
    right: scale(110),
    alignSelf: 'center',
    backgroundColor: '#6df0df',
    borderRadius: scale(30),
    // marginTop: verticalscale(40),
    // flexDirection: 'row',
  },

  buttonText: {
    fontSize: scale(16),
    color: '#0d323a',
    fontWeight: '700',
    fontFamily: 'Poppins-Regular',
  },

  skipButton: {
    fontSize: scale(16),
    color: '#0d323a',
    fontWeight: '700',
    fontFamily: 'Poppins-Regular',
  },

  nextArrow: {
    width: scale(20),
    height: scale(20),
    resizeMode: 'contain',
    marginLeft: scale(10),
  },
});
