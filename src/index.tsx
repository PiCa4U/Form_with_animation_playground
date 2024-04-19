import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text} from 'react-native';

import {styles} from './style';

import {Often} from './components/forms/often/often';
import {UserAuth} from './components/forms/basicInfo/userAuth';
import {TypeOfShipment} from './components/forms/typeOfShipment/TypeOfShipment';
import {Poloska} from './components/elements/Poloska/poloska';

export const App = () => {
  const [page, setPage] = useState(0);

  useEffect(() => {
    console.log(page);
  }, [page]);

  const onNext = () => {
    if (page < 2) {
      setPage(prevstate => prevstate + 1);
      return;
    }
    setPage(0);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Shipper company</Text>
      <Text style={styles.underTitle}>
        Thanks for registering to our platform. Please fill out your company’s
        information to start planning your shippments
      </Text>
      <Poloska page={page} setPage={setPage} />

      {page == 0 ? (
        <UserAuth onNext={onNext} page={page} setPage={setPage} />
      ) : (
        (page == 1 && <Often onNext={onNext} />) ||
        (page == 2 && <TypeOfShipment />)
      )}
    </SafeAreaView>
  );
};
