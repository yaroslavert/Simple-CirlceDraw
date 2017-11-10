(function() {
    const defaultSettings = {
        stroke: 15,
        strokeColor: '#979797',
        pathColor: '#fff',
        radius: 50,
        total: 100,
        current: 55,
        maxAgnle: 359.9999,
        ease: 'easeInCubic',
        durations: 1000
    }
    class Ease {
      // t: current time (or position) of the neonate. This can be seconds or frames, steps,
      // seconds, ms, whatever – as long as the unit is the same as is used for the total time.
      // b: beginning value of the property.
      // c: change between the beginning and destination value of the property.
      // d: total time of the neonate.
      static linearEase(t, b, c, d) {
        return c * t / d + b;
      }
    
      static easeInQuad(t, b, c, d) {
        return c * (t /= d) * t + b;
      }
    
      static easeOutQuad(t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b;
      }
    
      static easeInOutQuad(t, b, c, d) {
        if ((t /= d / 2) < 1) {
          return c / 2 * t * t + b;
        }
    
        return -c / 2 * ((--t) * (t - 2) - 1) + b;
      }
    
      static easeInCubic(t, b, c, d) {
        return c * (t /= d) * t * t + b;
      }
    
      static easeOutCubic(t, b, c, d) {
        return c * ((t = t / d - 1) * t * t + 1) + b;
      }
    
      static easeInOutCubic(t, b, c, d) {
        if ((t /= d / 2) < 1) {
          return c / 2 * t * t * t + b;
        }
    
        return c / 2 * ((t -= 2) * t * t + 2) + b;
      }
    
      static easeInQuart(t, b, c, d) {
        return c * (t /= d) * t * t * t + b;
      }
    
      static easeOutQuart(t, b, c, d) {
        return -c * ((t = t / d - 1) * t * t * t - 1) + b;
      }
    
      static easeInOutQuart(t, b, c, d) {
        if ((t /= d / 2) < 1) {
          return c / 2 * t * t * t * t + b;
        }
    
        return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
      }
    
      static easeInQuint(t, b, c, d) {
        return c * (t /= d) * t * t * t * t + b;
      }
    
      static easeOutQuint(t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
      }
    
      static easeInOutQuint(t, b, c, d) {
        if ((t /= d / 2) < 1) {
          return c / 2 * t * t * t * t * t + b;
        }
    
        return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
      }
    
      static easeInSine(t, b, c, d) {
        return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
      }
    
      static easeOutSine(t, b, c, d) {
        return c * Math.sin(t / d * (Math.PI / 2)) + b;
      }
    
      static easeInOutSine(t, b, c, d) {
        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
      }
    
      static easeInExpo(t, b, c, d) {
        return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
      }
    
      static easeOutExpo(t, b, c, d) {
        return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
      }
    
      static easeInOutExpo(t, b, c, d) {
        if (t == 0) {
          return b;
        }
    
        if (t == d) {
          return b + c;
        }
    
        if ((t /= d / 2) < 1) {
          return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        }
    
        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
      }
    
      static easeInCirc(t, b, c, d) {
        return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
      }
    
      static easeOutCirc(t, b, c, d) {
        return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
      }
    
      static easeInOutCirc(t, b, c, d) {
        if ((t /= d / 2) < 1) {
          return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
        }
    
        return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
      }
    
      static easeInElastic(t, b, c, d) {
        let s = 1.70158;
        let p = d * 0.3;
        let a = c;
    
        if (t == 0) {
          return b;
        }
    
        if ((t /= d) == 1) {
          return b + c;
        }
    
        if (a < Math.abs(c)) {
          a = c;
          s = p / 4;
        } else {
          s = p / (2 * Math.PI) * Math.asin(c / a);
        }
    
        return -(a * Math.pow(2, 10 * (t--)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
      }
    
      static easeOutElastic(t, b, c, d) {
        let s = 1.70158;
        let p = d * 0.3;
        let a = c;
    
        if (t == 0) {
          return b;
        }
    
        if ((t /= d) == 1) {
          return b + c;
        }
    
        if (a < Math.abs(c)) {
          a = c;
          s = p / 4;
        } else {
          s = p / (2 * Math.PI) * Math.asin(c / a);
        }
    
        return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
      }
    
      static easeInOutElastic(t, b, c, d) {
        let s = 1.70158;
        let p = d * (0.3 * 1.5);
        let a = c;
    
        if (t == 0) {
          return b;
        }
    
        if ((t /= d / 2) == 2) {
          return b + c;
        }
    
        if (a < Math.abs(c)) {
          a = c;
          s = p / 4;
        } else {
          s = p / (2 * Math.PI) * Math.asin(c / a);
        }
    
        if (t < 1) {
          return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) *
            Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        }
    
        return a * Math.pow(2, -10 * (t -= 1)) *
          Math.sin((t * d - s) * (2 * Math.PI) / p) * 0.5 + c + b;
      }
    
      static easeInBack(t, b, c, d, s = 1.70158) {
        return c * (t /= d) * t * ((s + 1) * t - s) + b;
      }
    
      static easeOutBack(t, b, c, d, s = 1.70158) {
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
      }
    
      static easeInOutBack(t, b, c, d, s = 1.70158) {
        if ((t /= d / 2) < 1) {
          return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
        }
    
        return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
      }
    
      static easeInBounce(t, b, c, d) {
        return c - this.easeOutBounce(d - t, 0, c, d) + b;
      }
    
      static easeOutBounce(t, b, c, d) {
        if ((t /= d) < (1 / 2.75)) {
          return c * (7.5625 * t * t) + b;
        } else if (t < (2 / 2.75)) {
          return c * (7.5625 * (t -= (1.5 / 2.75)) * t + 0.75) + b;
        } else if (t < (2.5 / 2.75)) {
          return c * (7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375) + b;
        }
    
        return c * (7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375) + b;
      }
    
      static easeInOutBounce(t, b, c, d) {
        if (t < d / 2) {
          return this.easeInBounce(t * 2, 0, c, d) * 0.5 + b;
        }
    
        return this.easeOutBounce(t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
      }
    }
    class Circle{
        constructor(element, settings) {
            this._element = element;
            this._lastValue = null;
            this._lastValueInProgress = null;
            this._animationEnd = false;
            this._animationInProgress = false;
            this._animationId = null;
            this._lastCurrentValue = null;
            this._drawingMode = 'up';
            this._init(settings);
            this._draw();
        }
        _init(settings) {
            this.settings = Object.assign({}, defaultSettings, settings);
            this.settings.pathRadius = this.settings.radius - (this.settings.stroke / 2);
            this.settings.from = 0;
            this.settings.to = this.settings.current;
            this._lastValue = 0;
            const _settings = this.settings;
            
            this._countainer = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            this._circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            this._path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            
            this._countainer.setAttribute('viewBox', this._getViewBox());
            this._countainer.setAttribute('width', this._diameter);
            this._countainer.setAttribute('height', this._diameter);

            this._circle.setAttribute('cx', _settings.radius);
            this._circle.setAttribute('cy', _settings.radius);
            this._circle.setAttribute('r', _settings.pathRadius);
            this._circle.setAttribute('stroke', _settings.strokeColor);
            this._circle.setAttribute('stroke-width', _settings.stroke + 'px');
            this._circle.setAttribute('fill', 'transparent');

            this._path.setAttribute('stroke', _settings.pathColor);
            this._path.setAttribute('stroke-width', _settings.stroke + 'px');
            this._path.setAttribute('fill', 'transparent');

            this._countainer.appendChild(this._circle);
            this._countainer.appendChild(this._path);
            this._element.appendChild(this._countainer);
        }
        _draw() {
          if (this._animationEnd) {
            this._animationEnd = false;
          }
          
          this._animationInProgress = true;

          this._lastCurrentValue = this.settings.current;

          if (this._lastValue < this.settings.current) {
            this._drawingMode = 'up';
          } else {
            this._drawingMode = 'down';
          }

          this.settings.to = Math.abs(this._lastValue - this.settings.current);

          const startTime = performance.now();
          const self = this;
          const durations = self.settings.durations;

          this._animationId = requestAnimationFrame(function animate() {
            const currentTime = Math.min(performance.now() - startTime, durations);

            let value = Ease[self.settings.ease](currentTime, self.settings.from, self.settings.to , durations);
          
            value = self._drawingMode === 'up' ? Math.abs(self._lastValue + value) : Math.abs(self._lastValue - value);
            self._lastValueInProgress = value;

            if (currentTime <= durations && !self._animationEnd) {
              self._setPath(value);
              self._animationId = requestAnimationFrame(animate);
              if (currentTime === durations) {
                self._animationEnd = true;
                self._animationInProgress = false;
                self._lastValue = value;
              }
            }
          });
        }
        _setPath(value) {
            const persent = (value / this.settings.total) * this.settings.maxAgnle;
            const start = this.polayToDecart(this.settings.radius, this.settings.pathRadius, persent);
            const end = this.polayToDecart(this.settings.radius, this.settings.pathRadius, 0);
            const arcSweep = (persent <= 180 ? 0 : 1)
            
            const d = `M ${start} A ${this.settings.pathRadius} ${this.settings.pathRadius} 0 ${arcSweep} 0 ${end}`;
            this._path.setAttribute('d', d);
        }
        get _diameter() {
            return this._radius * 2;
        }
        get _radius() {
            return this.settings.radius;
        }
        get _stroke() {
            return this.settings.stroke;
        }
        _getViewBox() {
            return `0 0 ${this._diameter} ${this._diameter}`;
        }
        polayToDecart(elementRadius, pathRadius, angleindegree){
            const angleInRadian = (angleindegree - 90) * (Math.PI / 180);
            const x = elementRadius + (pathRadius * Math.cos(angleInRadian));
            const y = elementRadius + (pathRadius * Math.sin(angleInRadian));
            return x + ' ' + y; 
        }
        updateCircle(value) {
          if (this._animationInProgress) {
            cancelAnimationFrame(this._animationId);
            this._lastValue = this._lastValueInProgress;
          }
          value = Math.max(0,Math.min(+value, this.settings.total));

          if (value === this.settings.current && !this._animationInProgress) return;

          this.settings.current = value;
          this._draw();
        }
    }

    window.Circle = Circle;
})();

const circle = new Circle(todo, {
    total: 100,
    current: 20
});
myInput.addEventListener('keyup', function(event) {
    circle.updateCircle(myInput.value);
});
const arr = document.querySelectorAll('.btn');
arr.forEach((item) => {
  item.addEventListener('click', onClick);
});
function onClick(e) {
  circle.updateCircle(e.target.innerHTML);
}