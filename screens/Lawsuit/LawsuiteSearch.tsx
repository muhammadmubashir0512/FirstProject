import { View, Text, TextInput, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import GreenButton from '../../components/GreenButton';
import styles from './laswsuitStyles';
import { useState } from 'react';

const LawsuiteSearch = () => {
    const [searchVal, setSearchVal] = useState()
  return (
    <SafeAreaView style={{backgroundColor:"white", flex:1}}>
        <ScrollView showsVerticalScrollIndicator={false} style={{flexGrow:1}}> 
            <View  style={[styles.container, {flex:1}]}>
                    {/* Top Bar Data */}
                <View style={styles.topBar}>
                    <View style={styles.headingContainer}>
                        <View style={styles.backIcon}>
                            <Text style={[styles.title, {fontSize:20}, {fontWeight:"700"}]}>←</Text>
                        </View>

                        <Text style={[styles.title, { fontSize: 16, fontWeight: '600' }]}>Lawsuit Search</Text>
                    </View>

                    <View style={styles.bodyContent}>
                    <Text style={[styles.title, { fontSize: 20, fontWeight: '900' }]}>
                        Food Product Lawsuit Index
                    </Text>

                    <Text style={[styles.title, { fontSize: 12, color: 'rgba(255,255,255,0.85)' }]}>
                        Search public lawsuit records involving food products, labeling,
                        ingredients and manufacturers. Cases from 1995– 2025.
                    </Text>

                    <View style={styles.source}>
                        <Text style={[styles.title, { fontSize: 10 }]}>📖  Source: National Agricultural Law Center</Text>
                    </View>
                    </View>
                </View>

                {/* Search Fields */}
                <View style={styles.searchFields}>

                    {/* Search Input */}
                    <View style={styles.data}>
                        <Text style={[styles.title, {color:"rgba(73, 73, 73, 1)"}, {fontSize:16}, {fontWeight:400}]}>Lawsuit Search</Text>
                        <TextInput value={searchVal} placeholder='Type here...' placeholderTextColor={'rgba(0, 0, 0, 0.4)'} style={[styles.title, styles.input, {color:'rgba(0, 0, 0, 0.4)'}]} onChangeText={(text)=>setSearchVal(text)}/>
                    </View>

                    <GreenButton onClick={()=>{}} title={"Search Lawsuit"}/>
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
  );
};

export default LawsuiteSearch;