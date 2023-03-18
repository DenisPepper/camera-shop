import './app-spinner.css';

export function AppSpinner(): JSX.Element {
  return (
    <div className={'spinner'} data-testid={'app-spinner'}>
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
