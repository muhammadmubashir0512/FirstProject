import { StyleSheet } from "react-native"

const styles =StyleSheet.create( {
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: 'white',
      gap: 30,
      height: "100%",
    },
    topBar: {
        backgroundColor: "rgba(147, 112, 247, 1)",
        paddingTop: 45,
        paddingBottom: 22,
        paddingHorizontal: 18,
        gap: 14,
        width: "100%",
        height: "auto"
    },
    backIcon: {
        backgroundColor: "rgba(255,255,255,0.15)",
        height: 32,
        width: 32,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        flexDirection:'row',
    },
    headingContainer: {
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        justifyContent: "flex-start"
    },
    title: {
        fontFamily: 'Urbanist',
        fontWeight: '400',
        color: 'white'
    },
    bodyContent: {
        flexDirection: "column",
        gap: 10,
        justifyContent: "flex-start"
    },
    source: {
        backgroundColor: "rgba(255,255,255,0.15)",
        borderRadius: 8,
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "flex-start",
        paddingHorizontal: 10,
        paddingVertical: 6,
        width: "100%"
    },
    data:{
        justifyContent: "flex-start",
        gap:7,
        width: "100%",
        
    },
    searchFields:{
        gap: 48,
        width: "100%",
        paddingHorizontal: 18
    },
    input: {
      borderWidth: 1,
      borderColor: '#F5F5F5',
      padding: 10,
      borderRadius: 10,
      width: '100%',
      height: 50,
    },
})

export default styles