
const CtaSection = () => {
  return (
    <div className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
      <div className="container text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-heading font-bold mb-6">
            Ready to Join Project Guild?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Sign up today and discover how our AI-powered talent matching 
            can transform your job search experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/signup" 
              className="bg-white text-primary hover:bg-white/90 px-8 py-3 rounded-md font-medium transition-colors"
            >
              Join Now
            </a>
            <a 
              href="/signup?as=recruiter" 
              className="border border-white text-white hover:bg-white/10 px-8 py-3 rounded-md font-medium transition-colors"
            >
              Recruiter Access
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
