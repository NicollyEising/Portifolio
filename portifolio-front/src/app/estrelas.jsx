import React, { useEffect, useRef } from 'react';

const SparkleEffect = () => {
  const sparkles = 100;
  const colour = 'random';

  const star = useRef([]);
  const tiny = useRef([]);
  const starv = useRef(Array(sparkles).fill(0));
  const tinyv = useRef(Array(sparkles).fill(0));
  const starx = useRef([]);
  const stary = useRef([]);
  const tinyx = useRef([]);
  const tinyy = useRef([]);

  const x = useRef(0);
  const y = useRef(0);
  const ox = useRef(0);
  const oy = useRef(0);

  const swide = useRef(window.innerWidth);
  const shigh = useRef(window.innerHeight);
  const sleft = useRef(0);
  const sdown = useRef(0);

  const colours = ['#ff0000','#00ff00','#ffffff','#ff00ff','#ffa500','#ffff00','#00ff00','#ffffff','#ff00ff'];

  useEffect(() => {
    const container = document.createElement('div');
    container.style.position = 'absolute';
    container.style.top = '0px';
    container.style.left = '0px';
    document.body.appendChild(container);

    for (let i = 0; i < sparkles; i++) {
      const t = createDiv(3, 3);
      t.style.visibility = 'hidden';
      t.style.zIndex = '999';
      document.body.appendChild(t);
      tiny.current[i] = t;

      const s = createDiv(5, 5);
      s.style.backgroundColor = 'transparent';
      s.style.visibility = 'hidden';
      s.style.zIndex = '999';

      const l = createDiv(1, 5);
      const d = createDiv(5, 1);
      l.style.top = '2px';
      l.style.left = '0px';
      d.style.top = '0px';
      d.style.left = '2px';

      s.appendChild(l);
      s.appendChild(d);
      document.body.appendChild(s);

      star.current[i] = s;
    }

    const handleMouseMove = (e) => {
      x.current = e.pageX;
      y.current = e.pageY;
    };

    document.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', setScroll);
    window.addEventListener('resize', setDimensions);

    setDimensions();
    sparkle();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', setScroll);
      window.removeEventListener('resize', setDimensions);
      document.body.removeChild(container);
    };
  }, []);

  const createDiv = (h, w) => {
    const div = document.createElement('div');
    div.style.position = 'absolute';
    div.style.height = `${h}px`;
    div.style.width = `${w}px`;
    div.style.overflow = 'hidden';
    return div;
  };

  const newColour = () => {
    const c = [255, Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)];
    c.sort(() => 0.5 - Math.random());
    return `rgb(${c[0]}, ${c[1]}, ${c[2]})`;
  };

  const setScroll = () => {
    sdown.current = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    sleft.current = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
  };

  const setDimensions = () => {
    swide.current = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 800;
    shigh.current = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 600;
  };

  const sparkle = () => {
    if (Math.abs(x.current - ox.current) > 1 || Math.abs(y.current - oy.current) > 1) {
      ox.current = x.current;
      oy.current = y.current;

      for (let c = 0; c < sparkles; c++) {
        if (!starv.current[c]) {
          starx.current[c] = x.current;
          stary.current[c] = y.current + 1;
          const col = colour === 'random' ? newColour() : colour;

          const s = star.current[c];
          s.style.left = `${starx.current[c]}px`;
          s.style.top = `${stary.current[c]}px`;
          s.style.clip = 'rect(0px, 5px, 5px, 0px)';
          s.childNodes[0].style.backgroundColor = col;
          s.childNodes[1].style.backgroundColor = col;
          s.style.visibility = 'visible';

          starv.current[c] = 50;
          break;
        }
      }
    }

    for (let c = 0; c < sparkles; c++) {
      if (starv.current[c]) updateStar(c);
      if (tinyv.current[c]) updateTiny(c);
    }

    setTimeout(sparkle, 40);
  };

  const updateStar = (i) => {
    if (--starv.current[i] === 25) {
      star.current[i].style.clip = 'rect(1px, 4px, 4px, 1px)';
    }
    if (starv.current[i]) {
      stary.current[i] += 1 + Math.random() * 3;
      starx.current[i] += (i % 5 - 2) / 5;
      if (stary.current[i] < shigh.current + sdown.current) {
        star.current[i].style.top = `${stary.current[i]}px`;
        star.current[i].style.left = `${starx.current[i]}px`;
      } else {
        star.current[i].style.visibility = 'hidden';
        starv.current[i] = 0;
      }
    } else {
      tinyv.current[i] = 50;
      tinyy.current[i] = stary.current[i];
      tinyx.current[i] = starx.current[i];
      tiny.current[i].style.top = `${tinyy.current[i]}px`;
      tiny.current[i].style.left = `${tinyx.current[i]}px`;
      tiny.current[i].style.width = '2px';
      tiny.current[i].style.height = '2px';
      tiny.current[i].style.backgroundColor = star.current[i].childNodes[0].style.backgroundColor;
      star.current[i].style.visibility = 'hidden';
      tiny.current[i].style.visibility = 'visible';
    }
  };

  const updateTiny = (i) => {
    if (--tinyv.current[i] === 25) {
      tiny.current[i].style.width = '1px';
      tiny.current[i].style.height = '1px';
    }
    if (tinyv.current[i]) {
      tinyy.current[i] += 1 + Math.random() * 3;
      tinyx.current[i] += (i % 5 - 2) / 5;
      if (tinyy.current[i] < shigh.current + sdown.current) {
        tiny.current[i].style.top = `${tinyy.current[i]}px`;
        tiny.current[i].style.left = `${tinyx.current[i]}px`;
      } else {
        tiny.current[i].style.visibility = 'hidden';
        tinyv.current[i] = 0;
      }
    } else {
      tiny.current[i].style.visibility = 'hidden';
    }
  };

  return null;
};

export default SparkleEffect;
