
import React, { useEffect, useState } from "react";
import { TextComponent, View, Text, FlatList, StyleSheet } from "react-native";
import { Card} from "react-native-paper";
import axios from "axios";





export default function Home(){
    const [dados, setDados] = useState([]);

    async function getData(){
        try {
        var Response = await axios.get("https://bibliotecaetecmaua.azurewebsites.net/api/LivrosSedeApi")
        setDados(Response.data);
        }
        catch(erro){
            console.log("Falha ao carregar livros: " +erro)
        }
    }

    useEffect(
        ()=>{
            getData();
        },
        []
    );


    return(
        <FlatList 
        data={dados}
        renderItem={({item}) => 
            <Card style={estilo.cardEstilo}>
                
                <Card.Title title={item.titulo}/>
                <Card.Cover resizeMode="center"source={{uri:`https://bibliotecaetecmaua.azurewebsites.net/Content/Images/${item.imagem}`}}></Card.Cover>
                    <Card.Content>

                        <Text>{item.autor}</Text>
                        <Text>{item.editora}</Text>

                    </Card.Content>
                  
            </Card>
                


            
        }
        keyExtractor={(item)=>item.id.toString()}
        >


        </FlatList>


    );
}

const estilo = StyleSheet.create(
{
        cardEstilo: {
            margin:15,
            display:"flex",
            
        }
}

);