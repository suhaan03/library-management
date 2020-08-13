import * as React from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import db from '../config.js';

export default class Searchscreen extends React.Component {
  constructor() {
    super();
    this.state = { search: '', transaction: [] };
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <TextInput
          style={{
            width: 150,
            height: 40,
            //borderWidth: 1.5,
            //borderRightWidth: 0,
            fontSize: 15,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 0,
          }}
          placeholder="Search Screen"
          onChangeText={(text) => {
            this.setState({ search: text });
          }}
          //value={this.state.scannedBookId}
        />

        <TouchableOpacity
          style={{ backgroundColor: 'red', height: 30, width: 100 }}
          onPress={() => this.searchTransaction(this.state.search)}>
          <Text style={{ fontSize: 20 }}> Search </Text>
        </TouchableOpacity>

        <FlatList
          data={this.state.transaction}
          renderItem={({item}) => (
            <View style={{ borderBottomWidth: 2 }}>
              <Text>{'bookId' + item.bookId} </Text>
              <Text>{'StudentId' + item.studentId} </Text>
              <Text>{'transactionType' + item.transactionType} </Text>
              <Text>{'date' + item.date} </Text>
            </View>
          )}
        />
      </View>
    );
  }

  searchTransaction = async (a) => {
    console.log(a[0])
    if (a[0] == 's') {
      const Q = await db
        .collection('transactionCollection')
        .where('studentId', '==', a)
        .limit(10)
        .get();
      Q.docs.map((doc) => {
        this.setState({ transaction: [...this.state.transaction, doc.data()] });
      });
    }

    if (a[0] == 'd') {
      const Q = await db
        .collection('transactionCollection')
        .where('bookId', '==', a)
        .limit(10)
        .get();
      Q.docs.map((doc) => {
        this.setState({ transaction: [...this.state.transaction, doc.data()] });
      });
    }
  };
}
