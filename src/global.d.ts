// xx[.d].ts

declare var window: Window &
  typeof globalThis & {
    hbspt: {
      forms: {
        create: (args: {
          region: string;
          portalId: string;
          formId: string;
        }) => void;
      };
    };
  };
