import { StyleSheet, Text, View ,Image,ScrollView} from 'react-native'
import React,{useRef,useState} from 'react'
import Carousel,{Pagination} from 'react-native-snap-carousel';
import { COLORS, ICONS } from '../../common/constants';
import { scale, verticalScale, moderateScale} from 'react-native-size-matters';
import TodayEvents from './TodayEvents';
import MyEvent from './MyEvent';
import InvitedEvents from './InvitedEvents';

const HomeScreen = (props) => {
  const [index, setIndex] = useState(0)
  const isCarousel = useRef(null)
  const data = [
    {
      title: "Aenean leo",
      VideoUrl: ICONS.video1
    },
    {
      title: "In turpis",
      VideoUrl:ICONS.video2
    },
    {
      title: "Lorem Ipsum",
      VideoUrl: ICONS.video3
    },
    {
      title: "Lorem Ipsum",
      VideoUrl: ICONS.video1
    }
  ]
  const CarouselCardItem = ({ item, index }) => {
    return (
      <View style={styles.container} key={index}>
                <Image 
         source={item.VideoUrl}
         resizeMode="cover"
         style={{
             width:'100%',
             height: verticalScale(92),
   }}
    />
        {/* <Text style={styles.header}>{item.title}</Text> */}
      </View>)
  }
  return (
    <ScrollView Style={{
      flex: 1,
      backgroundColor: COLORS.primary,
    }}>
    <View style={styles.video}>
           <Carousel
             ref={isCarousel}
              data={data}
              renderItem={CarouselCardItem}
              sliderWidth={scale(350)}
        itemWidth={scale(350)}
        onSnapToItem={(index) => setIndex(index)}
        useScrollView={true}
        style={styles.video}
            />
      </View>
      <TodayEvents props={props}/>
      <MyEvent props={props}/>
      <InvitedEvents props={props}/>
      </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({

  video: {
    width: '100%',
    height: verticalScale(92),
    overflow: "hidden",
    zIndex: 2,
    alignContent: "center",
    justifyContent: "center",
  },
  container: {
    width: '100%',
    height: verticalScale(92),
  },
 
})