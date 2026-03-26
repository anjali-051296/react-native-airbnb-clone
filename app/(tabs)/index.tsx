import { View, Text} from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const Page = () =>{
    return (
        <View>
            <Link href="../(modals)/login">Go to Login</Link>
            <Link href="../(modals)/booking">Go to Booking</Link>
            <Link href="../listing/123">Go to Listing 123</Link>
        </View>
    )
}

export default Page;