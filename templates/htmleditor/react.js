const { createElement, useState, useEffect } = React;
const { render } = ReactDOM;
import htm from "https://unpkg.com/htm?module";
const html = htm.bind(createElement);

const useFetch = url => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, []);
  return { data, loading };
};

export { useState, useEffect, useFetch, html, render }