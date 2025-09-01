import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

export default function SearchScreen() {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      <Text> {errorMessage}</Text>

      <ScrollView>
        <ResultsList
          title="Cost Effective"
          results={filterResultsByPrice('$')}
        />
        <ResultsList
          title="Bit Pricier"
          results={filterResultsByPrice('$$')}
        />
        <ResultsList
          title="Big Spenders"
          results={filterResultsByPrice('$$$')}
        />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({});
