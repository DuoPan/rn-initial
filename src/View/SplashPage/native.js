import React from 'react';
import {Button, StyleSheet} from 'react-native';
import Typography from 'View/Basic/Typography/native';
import {connect} from 'react-redux';
import {createNavigation} from 'Logic/service/navigation';
import {useHistory, useLocation} from 'react-router-native';
import {URI} from 'uri';

const styles = StyleSheet.create({
  root: {
    textAlign: 'center',
    marginTop: 40,
  }
});

function SplashPage() {
  const navigation = createNavigation(useHistory(), useLocation());

  return (
    <>
      <Button title={'GO'} onPress={() => navigation.redirect(URI.SECOND)}/>
      <Typography style={styles.root}>Welcome</Typography>
    </>
  );
}

SplashPage.propTypes = {
};

function mapStateToProps(state) {
  return {
  }
}

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(SplashPage);
