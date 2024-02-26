import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>אוכל טעים, נשלח אליך</h2>
      <p>
      בחר את הארוחה המועדפת עליך מתוך המבחר הרחב של הארוחות הזמינות שלנו
         וליהנות מארוחת צהריים או ערב טעימה בבית.
      </p>
      <p>
      כל הארוחות שלנו מבושלות עם מרכיבים איכותיים, בדיוק בזמן ו
         כמובן על ידי שפים מנוסים!
      </p>
    </section>
  );
};

export default MealsSummary;
