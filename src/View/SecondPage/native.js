import React from 'react';
import { StyleSheet, Button } from 'react-native';
import Typography from 'View/Basic/Typography/native';
import {connect} from 'react-redux';
import {createNavigation} from 'Logic/service/navigation';
import {useHistory, useLocation} from 'react-router-native';

const styles = StyleSheet.create({
  root: {
    textAlign: 'center',
    marginTop: 40,
  }
});

function SecondPage() {
  const navigation = createNavigation(useHistory(), useLocation());

  return (
    <>
      <Button title={'Back'} onPress={() => navigation.redirectBack()}/>
      <Typography style={styles.root}>Second Page</Typography>
    </>
  );
}

SecondPage.propTypes = {
};

function mapStateToProps(state) {
  return {
  }
}

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(SecondPage);
