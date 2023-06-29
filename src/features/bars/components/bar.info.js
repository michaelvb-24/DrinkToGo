import React from "react"
import { StyleSheet, Text, View, StatusBar, Image } from "react-native"

export const BarInfo = ({ bar = {} }) => {

    const { name = "Wall Street",
        icon = "",
        description = "Le WallStreet est un lieu accueillant et convivial où règne une atmosphère détendue et agréable. Dès que vous franchissez la porte, vous êtes enveloppé d'une ambiance chaleureuse et invitante. Les murs sont ornés de boiseries ou de briques, créant une sensation de rusticité et de confort. Les lumières tamisées diffusent une douce lueur, donnant au bar une atmosphère intime et relaxante.",
        photos = "https://images.unsplash.com/photo-1569937728169-55804de260bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=383&q=80",
        address = "1097 Rue de l'Université, 62400 Béthune",
        openingHours = "11:00 Le matin - 11:00 L'après-midi",
        rating = 4.5,
        numberOfRatings = 49,
    } = bar;

    return (
        <View style={StyleSheet.container}>
            <View>
                <Text style={{fontSize: 32, paddingLeft: 16, paddingBottom: 16,}}>{name}</Text>
            </View>
            <View>
                <Text style={{fontSize: 18, paddingLeft: 16,}}>
                    Nombre d'avis: {numberOfRatings}
                </Text>
                <Text style={{fontSize: 18, marginTop: 5, paddingLeft: 16,}}>
                    {address}
                </Text>
                <Text style={{fontSize: 16, marginTop: 5, marginBottom: 16, paddingLeft: 16,}}>
                    Ouvert: {openingHours}
                </Text>
            </View>
            <View>
                <Image source={{ uri: photos }} style={{ height: "50%", width: "100%", padding: 0, }} />
                <Text style={{fontSize: 18, marginTop: 16, marginBottom: 16, padding: 16,}}>
                    {description}
                </Text>
            </View>
            <View>
                <Text style={{paddingLeft: 16, fontSize: 16,}}>
                    Rate : {rating} / 5
                </Text>
            </View>
            <View>
                
            </View>
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent:"center",
        marginTop: StatusBar.currentHeight,
    },
});