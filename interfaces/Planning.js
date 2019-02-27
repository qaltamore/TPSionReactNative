import React from 'react'
import { View } from 'react-native'
import { Calendar } from 'react-native-calendars'

class Planning extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <View>
                <Calendar
                    onChange={range => console.log(range)}
                    minDate="2019-01-01"
                    startDate="2019-02-27"
                    endDate="2019-12-31"
                    theme={{
                      weekColumnTextStyle: {
                        color: 'red',
                      },
                      weekColumnStyle: {
                        paddingVertical: 20,
                      },
                      weekColumnsContainerStyle: {
                        backgroundColor: 'lightgrey',
                      },
                      monthTitleStyle: {
                        color: 'blue',
                      },
                      nonTouchableDayContainerStyle: {
                        backgroundColor: 'red',
                      },
                      nonTouchableDayTextStyle: {
                        color: 'green',
                      },
                      dayTextStyle: {
                        color: 'blue',
                      },
                      activeDayContainerStyle: {
                        backgroundColor: 'lightgrey',
                      },
                      activeDayTextStyle: {
                        color: 'red',
                      },
                    }}
                />
            </View>
        )
    }
}

export default Planning