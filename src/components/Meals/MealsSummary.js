import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section dir='rtl' className={classes.summary}>
      <h2>אוכל טעים, נשלח אליך</h2>
      <p>
      אתיופיה מציעה ארומה עזה וטעמים עשירים במטבחה המסורתי.
      בואו לטעום את המנות המוכרות ביותר, מוכנות באהבה ובמיומנות על ידי השפית שלנו.
      </p>
      <p>
      כשהארוחה מסתיימת, נסגרת בטקס הכנת הקפה המיוחד.
      כך, האתיופיות מביאות את קסם המטבח המסורתי לשולחן האוכל שלכם.
      </p>
    </section>
  );
};

export default MealsSummary;
