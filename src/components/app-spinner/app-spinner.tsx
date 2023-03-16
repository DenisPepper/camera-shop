import './app-spinner.css';

export function AppSpinner(): JSX.Element {
  return (
    <div className={'spinner'}>
      <div className={'lds-spinner'}>
        <div/>
        <div/>
        <div/>
        <div/>
        <div/>
        <div/>
        <div/>
        <div/>
        <div/>
        <div/>
        <div/>
        <div/>
      </div>
    </div>
  );
}
